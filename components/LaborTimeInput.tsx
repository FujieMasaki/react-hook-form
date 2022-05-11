import { useForm, SubmitHandler } from 'react-hook-form';


enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other'
}
interface LaborTimeInput {
    firstName: String;
    gender: GenderEnum;
}
export default function App() {
    const { register, handleSubmit } = useForm<LaborTimeInput>();
    const onSubmit: SubmitHandler<LaborTimeInput> = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                First Name
                <input {...register('firstName')} />
            </label>
            <label>
                Gender Selection
                <select {...register('gender')}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </label>
            <input type="submit" />
        </form>
    );
}