import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import { styles } from '../../../app/styles/style';
import { AiOutlineCamera } from 'react-icons/ai';
import avatarIcon from '../../../public/images/emptyProfilePic2.png';
import { useEditProfileMutation, useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';


type Props = {
  avatar: string | null;
  user: any;
}

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);
  const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: success, error: updateError }] = useEditProfileMutation();
  const [loadUser, setLoadUser] = useState(false);
  const { } = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

  const imageHandler = async (e: any) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader) {
        const avatar = fileReader.result;
        updateAvatar({
          avatar,
        });
      }
    };
    fileReader.readAsDataURL(e.target.file[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
    }
    if (error || updateError) {
      console.log(error)
    }
  }, [isSuccess, error, success, updateError]);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name !== '') {
      await editProfile({
        name: name,
       // email: user.email, //remove if(email&&user) statement from usercontroller
      });  ///user can not change the email (readOnly)
    }
  }; 

  return (
    <>
      <div className='w-full flex justify-center'>
        <div className="relative">
          <Image
            src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
            alt=""
            width={120}
            height={120}
            className='w-[120px] h-[120px] cursor-pointer border[3px] border-[#37a39a] rounded-full'
          />
          <input
            type="file"
            name=''
            className='hidden'
            onChange={imageHandler}
            id='avatar'
            accept='image/png,image/jpg,image/jpeg,image/webp'
          />

          <label htmlFor="avatar">
            <div className='w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer' >
              <AiOutlineCamera size={20} className='z-1' />
            </div>
          </label>
        </div>
      </div >
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50%] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2  text-black dark:text-[#fff]">Full Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className="block pb-2  text-black dark:text-[#fff]">Email Adress</label>
              <input
                type="text"
                readOnly
                value={user?.email}
                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                required
              />
            </div>
            <input
              type="submit"
              value='Update'
              className={`w-full 800px:w-[250px] h-[40px] border dark:border-[#ffbf009a] hover:dark:border-[#ffc100] border-slate-900 text-center dark:text-[#fff] text-black rounded-[7px] mt-8 cursor-pointer`}
              required
            />
          </div>
        </form>
        <br />
      </div>
    </>

  )
}

export default ProfileInfo