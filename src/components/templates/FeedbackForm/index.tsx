import { useEffect, useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { parsePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';

import { BasicButton } from 'components/atoms/BasicButton';
import { Typography } from 'components/atoms/Typography';

import {
    Disclaimer,
    StyledForm,
    StyledInput,
    StyledPhoneInput,
} from './FeedbackForm.styled';

type FormData = {
    name: string;
    phone: string;
};

export const FeedbackForm = (): JSX.Element => {
    const [validCountry, setValidCountry] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        control,
    } = useForm<FormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        reset();
    });

    const watchPhone = watch('phone');
    const phoneNumber = parsePhoneNumber(String(watchPhone));

    useEffect(() => {
        if (phoneNumber) {
            setValidCountry(phoneNumber.country === 'RU');
        }
    }, [phoneNumber]);

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledInput
                type="text"
                id="name"
                placeholder="Ваше имя"
                {...register('name', {
                    required: true,
                    maxLength: 24,
                })}
            />
            {errors.name && errors.name.type === 'required' && (
                <span>Введите ваше имя, пожалуйста</span>
            )}
            {errors.name && errors.name.type === 'maxLength' && (
                <span>Максимальное количество символов 24</span>
            )}
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: true,
                    maxLength: 1,
                    minLength: 17,
                    // validate: (value) => {
                    //     isValidPhoneNumber(value);
                    // },
                }}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <StyledPhoneInput
                        value={value}
                        onChange={onChange}
                        defaultCountry="RU"
                        id="phone"
                        maxLength="17"
                        placeholder="8 (999) 999-99-99"
                    />
                )}
            />

            {!validCountry ? (
                <span>
                    Пожалуйста, убедитесь что вы ввели российский номер телефона
                </span>
            ) : undefined}

            {errors.phone && (
                <p className="error-message">Неправильный формат телефона</p>
            )}
            {errors.phone && errors.phone.type === 'required' && (
                <span>Введите номер телефона, пожалуйста</span>
            )}
            {errors.phone && errors.phone.type === 'maxLength' && (
                <span>Слишком длинный номер телефона</span>
            )}

            <BasicButton
                variant="submit"
                type="submit"
                disabled={!validCountry || !!Object.keys(errors).length}
            >
                Списать долги!
            </BasicButton>

            <Disclaimer>
                <Typography>Нажимая на&nbsp;кнопку, вы&nbsp;даете</Typography>
                <button type="button">
                    согласие на&nbsp;обработку персональных данных
                </button>
                <Typography> и&nbsp;соглашаетесь c&nbsp;</Typography>
                <button type="button">политикой конфиденциальности</button>
            </Disclaimer>
        </StyledForm>
    );
};
