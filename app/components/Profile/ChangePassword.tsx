import React, { FC, useState, useEffect } from 'react';
import { styles } from '@/app/styles/style';
import { useUpdatePasswordMutation } from '@/redux/features/user/userApi';
import toast from 'react-hot-toast';

type Props = {}

const ChangePassword: FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

    const passwordChangeHandler = async (e: any) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            await updatePassword({ oldPassword, newPassword });
        }
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("password changed successfully");
        }
        if (error) {
            if ('data' in error) {
                const errorData = error as any;
            }
        }
    }, [isSuccess, error]);

    return (
        <div className='w-full pl-7 px-2 800px:px-5 800px:pl-0'>
            <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] text-black dark:text-[#fff] pb-2">
                ChangePassword
            </h1>
            <div className="w-full">
                <form
                    // aria-required
                    onSubmit={passwordChangeHandler}
                    className='flex flex-col items-center'
                >
                    <div className="w-[10px] 800px:w-[60%] mt-5">
                        <label className="block pb-2  text-black dark:text-[#fff]">Enter your old password</label>
                        <input
                            type="password"
                            onChange={(e) => setOldPassword(e.target.value)}
                            value={oldPassword}
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0  text-black dark:text-[#fff]`}
                            required
                        />
                    </div>
                    <div className="w-[10px] 800px:w-[60%] mt-5">
                        <label className="block pb-2  text-black dark:text-[#fff]">Enter your new password</label>
                        <input
                            type="password"
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0  text-black dark:text-[#fff]`}
                            required
                        />
                    </div>
                    <div className="w-[10px] 800px:w-[60%] mt-5">
                        <label className="block pb-2  text-black dark:text-[#fff]">Confirm your password</label>
                        <input
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0  text-black dark:text-[#fff]`}
                            required
                        />
                        <input
                            type="submit"
                            value='Update'
                            className={`w-full 800px:w-[250px] h-[40px] border border-slate-900 dark:border-[#ffbf009a] hover:dark:border-[#ffc100] text-center dark:text-[#fff] text-black rounded-[7px] mt-8 cursor-pointer`}
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword