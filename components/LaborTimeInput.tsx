import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    firstName: String;
    lastName: string;
    age: number;
}
export default function App() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                firstName
                <input {...register('firstName', { required: true, maxLength: 20 })} />
            </label>
            <label>
                lastName
                <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
            </label>
            <label>
                age
                <input type="number" {...register('age', { min: 18, max: 99 })} />
            </label>
            <input type="submit" />
        </form>
    );
}