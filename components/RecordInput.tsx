import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from './Input';

interface RecordInput {
    'First Name': string;
    "time": number;
    Age: number;

}
function RecordInput() {
    const { register, handleSubmit } = useForm<RecordInput>();
    const onSubmit: SubmitHandler<RecordInput> = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Input label="time" register={register} valueAsNumber />
            <input type="submit" />
        </form>
    );
}
export default RecordInput;