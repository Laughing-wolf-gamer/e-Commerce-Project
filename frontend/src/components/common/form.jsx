import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const CommonForm = ({formControls,formData,setFormData,onSubmit,buttonText}) => {
    function renderInputControllersByType(controlItems){
        const value = formData[controlItems.name] || '';
        switch(controlItems.type){
            case 'text':
                return <Input
                    name={controlItems.name}
                    placeholder={controlItems.placeholder}
                    id = {controlItems.name}
                    type={controlItems.type}
                    value={value}
                    onChange={(e) => setFormData({...formData, [controlItems.name]: e.target.value})}
                />
            case 'select':
                return <Select 
                    onValueChange={(v)=> setFormData({...formData,[controlItems]:v})} 
                    value={value}
                >
                        <SelectTrigger className= "w-full">
                            <SelectValue placeholder = {controlItems.placeholder}/>
                        </SelectTrigger>
                        <SelectContent>
                            {
                                controlItems.options && controlItems.options.length > 0 ? 
                                controlItems.options.map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>):null
                            }
                        </SelectContent>
                    </Select>
            case "textarea":
                return <Textarea
                    value={value}
                    name={controlItems.name}
                    placeholder={controlItems.placeholder}
                    id = {controlItems.name}
                    onChange={(e) => setFormData({...formData, [controlItems.name]: e.target.value})}
                />
            default:

                return <Input
                    value={value}
                    name={controlItems.name}
                    placeholder={controlItems.placeholder}
                    id = {controlItems.name}
                    type={controlItems.type}
                    onChange={(e) => setFormData({...formData, [controlItems.name]: e.target.value})}
                />
        }
    }
    return (
        <form onSubmit={onsubmit}>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map(controlItem => (
                        <div key={controlItem.name} className = "grid w-full gap-1.5">
                            <Label>{controlItem.label} </Label>
                            {
                                renderInputControllersByType(controlItem)
                            }
                        </div>
                    ))
                }
            </div>
            <Button className = "mt-2 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default CommonForm