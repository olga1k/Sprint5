import styled from 'styled-components'

export default function Indicator(props) {
    const data = props.data;
    const step = props.step;
    const Dot = styled.span`
background-color: red;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  display: inline-block;
`
const DotCurrent = styled.span`
background-color: red;
  width: 15px;
  height: 5px;
  border-radius: 35%;
  display: inline-block;
`
  const numberItems = data.map((dot, index) => {
        if (index === step) {return <DotCurrent key={crypto.randomUUID()} onClick={() => props.pick(index)} />

    } else {
        return <Dot key={crypto.randomUUID()} onClick={() => props.pick(index)} />
    }  
    
    })
    return (
        <div className="progress"
        >{numberItems}</div>
    )
}