import React from 'react'
import { skills, experiences } from '../constants/index'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import CTA from '../componets/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        嗨，我是<span className="blue-gradient_text font-semibold drop-shadow"> 俊杰</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          作為一位社會新鮮人，我踏入職場充滿期待與不安。
          面對陌生的工作環境，我必須學習適應與克服挑戰。
          同時，我也期望能快速成長，證明自己的能力。在這個過程中，與同事的互動和領導者的指導將是我珍貴的資源。
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          我的技能
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='block-container w-20 h-20' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>工作經驗</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            擁有豐富工作經驗的人通常具備多元的技能和深厚的專業知識，這使他們在職場上更具競爭力和適應性。多年的職場歷練不僅提升了解決問題的能力，也讓人學會了如何在不同的工作環境和團隊中有效溝通與合作。此外，豐富的工作經驗常常帶來廣泛的人脈網絡，這對於尋找新的工作機會或是事業發展都有莫大的助益。
            具備多年工作經驗的專業人士通常能夠快速理解業務流程，並能在面對挑戰時，運用過往的經驗來尋找最佳解決方案。他們的見識和經驗往往能夠指導年輕同事，增強團隊的整體表現。總之，豐富的工作經驗不僅是個人職業生涯的寶貴資產，也是推動整個組織向前發展的重要動力。透過不斷學習和適應新的工作環境，經驗豐富的職場人士能夠保持其專業的前瞻性和創新性。
          </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex items-center justify-center w-full h-full'>
                  <img src={experience.icon} alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain" />
                </div>}
                iconStyle={{background:experience.iconBg}}
                contentStyle={{
                  border: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {
                    experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50'>
                        {point}
                      </li>
                    ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr  className='border-slate-200 '/>
      <CTA/>
    </section>
  )
}

export default About