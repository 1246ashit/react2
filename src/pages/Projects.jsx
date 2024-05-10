import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import CTA from "../componets/CTA"

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My<span className="blue-gradient_text font-semibold drop-shadow"> Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          在這次的開發專案中，我深刻體會到溝通和計畫的重要性。
          我們團隊在需求分析、設計解決方案、編碼實作及測試階段都有良好的合作，
          但也面臨一些挑戰。例如，專案初期因需求不清晰導致多次修改，學到了需求明確化的重要。
          此外，採用敏捷開發模式，讓我們能夠快速適應變化，及時調整方向。技術上，我增強了對新工具的運用能力，
          對整個開發流程有了更深的理解。總之，這次經驗豐富了我的專業技能，也增進了團隊協作的經驗。
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {
          projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={project.iconUrl} alt="Project icon" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2'>
                  <Link to={project.link}
                    target="_blank"
                    rel='noopener npreferrer'
                    className='font-semibold text-blue-600 font-poppins'
                  >
                    原始碼 <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <hr className='border-slate-200' />
        <CTA/>
    </section>
  )
}

export default Projects