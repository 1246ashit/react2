import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../componets/Loader'
import Fox from '../componets/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../componets/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const {alert,showAlert,hideAlert}=useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "李俊杰",
        from_email: form.email,
        to_email: '1246ashot@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: '郵件發送成功，我會在最近三天內回覆您😍😍', type: 'success' })
      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      },[3000])
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({ show: true, text: '郵件發送失敗😱', type: 'danger' })
      console.log(error);
    });
  };

  const handleFocus = (e) => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show &&<Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>聯絡方式</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            名子
            <input type="text" name="name" className="input"
              placeholder='your name' required value={form.name} onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            信箱
            <input type="email" name="email" className="input"
              placeholder='your@gmail.com' required value={form.email} onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            想對我說的話
            <textarea name="message" className="input"  // 修正 type 和 name
              placeholder='告訴我能怎麼幫你👊👊' required value={form.message} onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? 'sending ...' : 'Send message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.5, -0.6, 0]}
              scale={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
