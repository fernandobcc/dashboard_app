import ContentHeader from '../../components/ContentHeader'
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
      <ContentHeader title="Inputs" lineColor="##F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Wrapper>
  )
}

export default List
