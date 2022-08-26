import MD5 from 'crypto-js/md5'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import { useEffect, useMemo, useState } from 'react'
import SelectInput from '../../components/SelectInput'
import * as S from './styles'
import formatCurrency from '../../utils/currencyFormat'
import { formatDate, checkDateString } from '../../utils/formatDate'

type ListProps = {
  type?: string
}

type dataProps = {
  id: string
  description: string
  amount: string
  type: string
  frequency: string
  date: string
  tagColor: string
}

const List = ({ type }: ListProps) => {
  const [selectedMonth, setMonthSelected] = useState(String(new Date().getMonth() + 1))
  const [selectedYear, setYearSelected] = useState(String(new Date().getFullYear()))
  const [data, setData] = useState<dataProps[]>([])
  const { title, lineColor, listData } = useMemo(() => {
    return type === 'entry-balance'
      ? {
          title: 'Inputs',
          lineColor: '#f7931b',
          listData: gains
        }
      : {
          title: 'Outputs',
          lineColor: '#e44c4e',
          listData: expenses
        }
  }, [type])

  const months = [
    {
      value: 7,
      label: 'July'
    },
    {
      value: 8,
      label: 'August'
    },
    {
      value: 9,
      label: 'Setember'
    }
  ]

  const years = [
    {
      value: 2020,
      label: '2020'
    },
    {
      value: 2021,
      label: '2021'
    },
    {
      value: 2022,
      label: '2022'
    }
  ]

  useEffect(() => {
    const filteredData = listData.filter((item) =>
      checkDateString(selectedYear, selectedMonth, item.date)
    )
    const listDataConverted = filteredData.map((item, index) => {
      const uniqueId = JSON.stringify(item) + index.toString()
      if (checkDateString(selectedYear, selectedMonth, item.date)) {
        return {
          id: MD5(uniqueId).toString(),
          description: item.description,
          amount: formatCurrency(item.amount),
          type: item.type,
          frequency: item.frequency,
          date: item.date,
          tagColor: item.frequency === 'regular' ? '#4e41f0' : '#e44c4e'
        }
      }
    }) as dataProps[]
    console.log(filteredData)
    setData(listDataConverted)
  }, [listData, selectedMonth, selectedYear])

  console.log('firt', selectedYear)
  return (
    <S.Wrapper>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          options={months}
          defaultValue={selectedMonth}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={selectedYear}
          onChange={(e) => setYearSelected(e.target.value)}
        />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tag-filter tag-filter-regular">
          Regulars
        </button>
        <button type="button" className="tag-filter  tag-filter-casual">
          Casuals
        </button>
      </S.Filters>
      <S.Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={formatDate(item.date)}
            amount={item.amount}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default List
