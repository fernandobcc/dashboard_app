import ContentHeader from '../../components/ContentHeader'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import SelectInput from '../../components/SelectInput'
import * as S from './styles'

const List: React.FC = () => {
  const options = [
    {
      value: 'Test',
      label: 'Test1'
    },
    {
      value: 'Test2',
      label: 'Test2'
    }
  ]
  return (
    <S.Wrapper>
      <ContentHeader title="Inputs" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
      <S.Content>
        <HistoryFinanceCard
          cardColor="#313862"
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
