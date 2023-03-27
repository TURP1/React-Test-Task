import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./NewUserForm.module.css";
import { useRef } from "react";
import ButtonYellow from "../../../Common/Button"




function NewUserForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const fileName = file ? file.name : "";
        document.getElementById("file-name").textContent = fileName;
    };





    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.user_form}>
            <input className={s.input_main} type="text" placeholder="Your name" {...register("Your name", { required: true, maxLength: 20 })} />
            <input className={s.input_main} type="text" placeholder="Email" {...register("Email", { required: true, min: 8, maxLength: 15, pattern: /^\S+@\S+$/i })} />
            <input className={s.input_main} type="tel" placeholder="Phone" {...register("Phone", { required: true, maxLength: 13, pattern: /^\+?3?8?(0\d{9})$/i })} />
            <label className={s.tel_label} htmlFor="Phone">+38 (XXX) XXX - XX - XX</label>

            <div className={s.radio}>
                <div className={s.radio_name}>
                    Select your position
                </div>
                <div className={s.radio_container}>
                    <input {...register("Select your position", { required: true })} id="frontend" type="radio" value="Frontend developer" />
                    <label className={s.labelsForRadio} htmlFor="frontend">Frontend developer</label>
                </div>

                <div className={s.radio_container}>
                    <input  {...register("Select your position", { required: true })} id="backend" type="radio" value="Backend developer" />
                    <label className={s.labelsForRadio} htmlFor="backend" >Backend developer</label>
                </div>

                <div className={s.radio_container}>
                    <input {...register("Select your position", { required: true })} id="designer" type="radio" value="Designer" />
                    <label className={s.labelsForRadio} htmlFor="designer">Designer</label>
                </div>

                <div className={s.radio_container}>
                    <input {...register("Select your position", { required: true })} id="qa" type="radio" value="QA" />
                    <label className={s.labelsForRadio} htmlFor="qa">QA</label>
                </div>
            </div>

            <div className={s.custom_file_container}>
                <label htmlFor="file-upload" className={s.custom_file_upload} >
                    <i className="fas fa-cloud-upload-alt"></i>Upload
                </label>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    id="file-upload"
                    className={s.hide}
                    onChange={handleFileInputChange}
                    ref={fileInputRef}
                />
                <span id="file-name" className={s.custom_file_name}></span>
            </div>

            <ButtonYellow  className={s.submit_btn} buttonName="Sign up" type="submit" state="disabled"></ButtonYellow>
        </form>
    );

}



export default NewUserForm;

