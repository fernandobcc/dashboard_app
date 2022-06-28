import * as S from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const Dashboard: React.FC = () => {
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
      <ContentHeader title="Dashboard" lineColor="##F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Wrapper>
  )
}

export default Dashboard
