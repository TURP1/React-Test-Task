import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./NewUserForm.module.css";
import { useRef } from "react";
import ButtonYellow from "../../../Common/Button"

import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { all } from 'axios';




export const registerOptions = {
    name: {
        required: "Name is Required",
        minLength: { value: 2, message: "Name must contain at least 2 symbols " },
        maxLength: { value: 20, message: "Name must not exceed 20 symbols" }
    },
    email: {
        required: "Email is Required",
        min: { value: 8, message: "Name must contain at least 8 symbols " },
        maxLength: { value: 15, message: "Email must not exceed 15 symbols" }
    },
    phone: {
        required: "Phone number is Required",
        pattern: { value: /^\+?3?8?(0\d{9})$/i, message: "Wrong phone number" }
    },
    position_id: {
        required: "Choose your position"
    },
    photo: {
        required: "Choose your photo"
    }

}



function NewUserForm(props) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = async (data) => {
        let formData = new FormData();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                formData.append(key, data[key]);
            }
            console.log(formData);





            const handleFileInputChange = (event) => {
                const file = event.target.files[0];
                const fileName = file ? file.name : "";
                document.getElementById("file-name").textContent = fileName;
            };


            let positionStore = props.positions || [{ id: 1, name: "free" }];

            let mapPositions = positionStore.map(position => (
                <FormControlLabel
                    key={position.id}
                    value={position.id.toString()}
                    error={errors.position_id}
                    control={
                        <Radio
                            sx={{
                                color: "#D0CFCF",
                                '&.Mui-checked': {
                                    color: "#00BDD3",
                                },
                            }}
                            size="small"
                            {...register('position_id')}
                        />}
                    label={position.name}
                />
            ))

            return (
                <form onSubmit={handleSubmit(onSubmit)} className={s.user_form}>
                    <div className={s.padding_top_50}>
                        <TextField
                            type="text"
                            label="Your name"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors?.name?.message}
                            {...register("name", registerOptions.name)}
                        />

                        <TextField
                            type="text"
                            label="Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors?.email?.message}
                            {...register("email", registerOptions.email)}
                        />

                        <TextField
                            type="tel"
                            label="Phone"
                            variant="outlined"
                            error={!!errors.phone}
                            helperText="+38 (XXX) XXX - XX - XX"
                            {...register("phone", registerOptions.phone)}
                        />

                        <RadioGroup >
                            {mapPositions}
                        </RadioGroup>
                        {errors.position_id && <p>{errors.position_id.message}</p>}

                        <div className={s.custom_file_container}>
                            <label htmlFor="file-upload" className={s.custom_file_upload} >
                                <i className="fas fa-cloud-upload-alt"></i>Upload
                            </label>
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                id="file-upload"
                                {...register("photo", registerOptions.photo)}
                                className={s.hide}
                                onChange={handleFileInputChange}

                            />
                            <span id="file-name" className={s.custom_file_name}></span>
                            {errors?.photo && errors.photo.message}
                        </div>

                    </div>




                    {/* {errors
                ? <ButtonYellow className={s.submit_btn} buttonName="Sign up" type="submit" state="disabled" ></ButtonYellow> */}
                    {<ButtonYellow className={s.submit_btn} buttonName="Sign up" type="submit" ></ButtonYellow>
                    }

                </form>
            );

        }
    }
}


    export default NewUserForm;

