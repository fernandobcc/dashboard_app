import MD5 from 'crypto-js/md5'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import { useEffect, useMemo, useState } from 'react'
import SelectInput from '../../components/SelectInput'
import * as S from './styles'

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
    const listDataConverted = listData.map((item, index) => {
      const uniqueId = JSON.stringify(item) + index.toString()
      return {
        id: MD5(uniqueId).toString(),
        description: item.description,
        amount: item.amount,
        type: item.type,
        frequency: item.frequency,
        date: item.date,
        tagColor: item.frequency === 'regular' ? '#4e41f0' : '#e44c4e'
      }
    })
    console.log(listDataConverted)
    setData(listDataConverted)
  }, [listData])

  return (
    <S.Wrapper>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
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
            subtitle={item.date}
            amount={'$' + item.amount}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default List
