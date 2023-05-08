import React from 'react';
import { useState } from 'react';
import './style.css'
// const options = ["1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3"];
const options = ["Конкурсы", "Театры", "IT","Спортивные мероприятия", "Городские мероприятия"];
export const Select = ({onClick,value}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const toggling = () => setIsOpen(!isOpen);

    // const onOptionClicked = value => () => {
    //     setSelectedOption(value);
    //     setIsOpen(false);
    //     console.log(selectedOption);
    //   };
    return (
    <>
        <div className='SelectContainer'>
            <div className='SelectToggle' onClick={toggling}>{ value || "Категория"}</div>
            {isOpen && (
                <div className='SelectContainerDrop'>
                    <ul>
                    {options.map(option => (
                        <li onClick={onClick(option)} key={Math.random()}>
                            {option}
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
    </>
    )
}