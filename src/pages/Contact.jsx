import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // 修正錯誤的變數名稱
  };

  const handleSubmit = (e) => {
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    e.preventDefault();
    setIsLoading(true);
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
      setForm({ name: '', email: '', message: '' }); // 這裡使用正確的函數名稱
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  };

  const handleFocus = (e) => {
  };
  const handleBlur = () => { };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
    </section>
  );
}

export default Contact;
