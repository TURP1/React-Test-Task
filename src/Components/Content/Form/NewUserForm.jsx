import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import successImg from '../../../assets/success-image.svg'
import s from "./NewUserForm.module.css";
import ButtonYellow from "../../../Common/Buttons/Button";
import { Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';


const emailPattern = /^(?:(?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i;
const phonePattern = /^[\+]{0,1}380([0-9]{9})$/


export const registerOptions = {
    name: {
        required: "Name is required",
        minLength: { value: 2, message: "Name must contain at least 2 symbols " },
        maxLength: { value: 20, message: "Name must not exceed 20 symbols" }
    },
    email: {
        required: "Email is required",
        min: { value: 8, message: "Name must contain at least 8 symbols " },
        pattern: { value: emailPattern, message: "Wrong email" },
        maxLength: { value: 100, message: "Email must not exceed 100 symbols" }
    },
    phone: {
        required: "Phone number is required",
        pattern: { value: phonePattern, message: "Wrong phone number" }
    },
    position_id: {
        required: "Choose your position"
    },
    photo: {
        required: "Choose your photo"
    }

}



function NewUserForm(props) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [accept, setSubmit] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    useEffect(() => {
        if (accept) {
            props.setSectionName('User successfully registered');
        }
    }, [accept]);

    const onSubmit = data => {
        data.photo = selectedFile;
        data.position_id = Number(data.position_id);

        props.
            registerUser({
                token: props.token,
                data
            })
            .then(() => {
                setSubmit(true);
                props.getUserCards(1, 6)
            })

            .catch(error => {
                if (error.response.data.fails.email) {
                    let fails = error.response.data.fails;
                    setError("email", { message: fails.email[0] });
                }
                alert(error)



            })
    }

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        const fileName = file ? file.name : "Upload your photo";
        document.getElementById("file-name").textContent = fileName;
        delete errors.photo;
    };


    let positionStore = props.positions || [{ id: 1, name: "free" }];

    let mapPositions = positionStore.map(position => (
        <FormControlLabel
            key={position.id}
            value={position.id.toString()}
            {...register('position_id')}
            control={
                <Radio
                    sx={{
                        color: "#D0CFCF",
                        '&.Mui-checked': {
                            color: "#00BDD3",
                        },
                    }}
                    size="small"
                />}
            label={
                <Typography
                    sx={{
                        fontFamily: "Nunito-regular", // Change the font-family here
                    }}
                >
                    {position.name}
                </Typography>
            }
        />
    ))

    let fileErrorHide = () => {
        let element = document.querySelector(`#file_container`);
        let element2 = document.querySelector(`#file_button_container`);
        element.style.border = "1px solid #D0CFCF";
        element2.style.border = "1px solid rgba(0, 0, 0, 0.87)";
    }

    let fileErrorShow = () => {
        let element = document.querySelector(`#file_container`);
        let element2 = document.querySelector(`#file_button_container`);
        element.style.border = "1px solid #CB3D40";
        element2.style.border = "1px solid #CB3D40";
        return <span id='error_text' className={s.photo_error}>{errors.photo.message}</span>
    }

    if (accept) {
        return (

            <div className={s.user_form}>
                <img className={s.success_img} src={successImg} alt="registration-success" />

                <div className={s.success_line}></div>
                <div className={s.success_footer}>
                    © abz.agency specially for the test task
                </div>
            </div>


        )
    }
    else return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.user_form}>
            <div className={s.flex_gap_50}>
                <TextField
                    type="text"
                    label="Your name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    {...register("name", registerOptions.name)}
                    InputLabelProps={{
                        sx: {
                            fontFamily: "Nunito-regular",
                            color: "#7E7E7E",
                            fontSize: '16px',
                        },
                    }}
                />
                <TextField
                    type="text"
                    label="Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    {...register("email", registerOptions.email)}
                    InputLabelProps={{
                        sx: {
                            fontFamily: "Nunito-regular",
                            color: "#7E7E7E",
                            fontSize: '16px',
                        },
                    }}
                />
                <TextField
                    type="tel"
                    label="Phone"
                    variant="outlined"
                    error={!!errors.phone}
                    helperText="+38 (XXX) XXX - XX - XX"
                    {...register("phone", registerOptions.phone)}
                    InputLabelProps={{
                        sx: {
                            fontFamily: "Nunito-regular",
                            color: "#7E7E7E",
                            fontSize: '16px',
                        },
                    }}
                    sx={{
                        '& .MuiFormHelperText-root': {
                            color: '#7E7E7E',
                            fontSize: '12px',
                            fontFamily: 'Nunito-regular',
                            lineHeight: '14px',
                            margin: '4px 0px 0px 14px'
                        },
                    }}
                />
            </div>
            <RadioGroup
                {...register('position_id', registerOptions.position_id)}>
                {errors?.position_id
                    ? (
                        <Typography color="error" sx={{ fontFamily: 'Nunito-regular' }}>
                            Select your position
                        </Typography>
                    )
                    : <div>
                        Select your position
                    </div>}

                {mapPositions}
            </RadioGroup>
            {/* Custom File Input */}
            <div className={s.p_50}>
                <div id="file_container" className={s.custom_file_container}>
                    <input
                        hidden
                        accept=".jpg,.jpeg"
                        id="photo"
                        type="file"
                        {...register("photo", registerOptions.photo)}
                        onChange={handleFileInputChange}
                    />
                    <label className={s.custom_file_upload} htmlFor="photo">
                        <Button component="span" id='file_button_container'
                            sx={{
                                height: '56px',
                                width: '86px',
                                color: 'rgba(0, 0, 0, 0.87)',
                                textTransform: 'none',
                                fontFamily: 'Nunito-Regular',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '26px',
                                borderRadius: '4px 0 0 4px',
                                top: '1px',
                                border: '1px solid rgba(0, 0, 0, 0.87)'
                            }}>
                            {"Upload"}
                        </Button>
                    </label>
                    <span id="file-name" className={s.custom_file_name}>
                        {selectedFile
                            ? selectedFile.name
                            : "Upload your photo"}
                        {selectedFile && fileErrorHide()}
                    </span>
                </div>
                {!!errors?.photo && !selectedFile && fileErrorShow()}
            </div>
            {(Object.keys(errors).length === 0)
                ? <div className={s.submit_btn}>
                    <ButtonYellow buttonName="Sign up" type="submit" ></ButtonYellow>
                </div>

                : <div className={s.submit_btn}>
                    <ButtonYellow buttonName="Sign up" type="submit" state="disabled" ></ButtonYellow>
                </div>

            }
        </form >
    );
}




export default NewUserForm;

