import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./NewUserForm.module.css";


function Radio(props)  {

    const { register } = useForm();

    let positionStore = props.positions || [{id:1, name: "free"}];
    let mapPositions = positionStore.map((p => {
        return (
            <div className={s.radio_container} key={p.id}>
                    <input {...register("Select your position", { required: true })}  id={p.id} type="radio" value={p.name} />
                    <label className={s.labelsForRadio} htmlFor={p.id}>{p.name}</label>
                </div>
        )
    }))

    return (
        <div className={s.radio}>
                <div className={s.radio_name}>
                    Select your position
                </div>
                {mapPositions}
            </div>
    )
}

export default Radio