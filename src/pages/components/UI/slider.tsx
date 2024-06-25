import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import './slider.customStyle.css'

const CustomSlider = ({
    value,
    setValue,
    min,
    max
} : {
    value : number
    setValue : React.Dispatch<React.SetStateAction<number>>
    min? : number,
    max? : number
}) => {
    return (
        <Slider 
            value={value} 
            onChange={(e:any, value:any)=>setValue(value)}
        />
    )
}
export default CustomSlider