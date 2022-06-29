import { useMemo } from 'react'
import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import * as S from './styles'

type ListProps = {
  type?: string
}

const List = ({ type }: ListProps) => {
  const { title, lineColor } = useMemo(() => {
    return type === 'entry-balance'
      ? {
          title: 'Inputs',
          lineColor: '#f7931b'
        }
      : {
          title: 'Outputs',
          lineColor: '#e44c4e'
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
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Power bill"
          subtitle="2022-01-01"
          amount="R$ 115.00"
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default List
