import { Path, UseFormRegister } from 'react-hook-form';
import RecordInput from './RecordInput';


type InputProps = {
    label: Path<RecordInput>;
    register: UseFormRegister<RecordInput>;
    required?: boolean;
    valueAsNumber?:boolean;
};
// <input>要素を含んだ子コンポーネント
export const Input = ({ label, register, required,valueAsNumber }: InputProps) => (
    <label>
        {label}
        <input {...register(label, { required,valueAsNumber })} />
    </label>
);