import React from 'react'
import Step1SetUp from '../components/Step1SetUp'


const InterviewPage = () => {
    const [Step,setStep] = React.useState(1);
    const [interviewData,setInterviewData] = React.useState(null);
  return (
    <div className='min-h-screen bg-gray-50'>
        {Step==1 && (
            <Step1SetUp onStart={(data)=>{
                setInterviewData(data);
                setStep(2)
            }}/>
        ) }

        {Step==2 && (
            <Step2Interview interviewData={interviewData}
            onFinish={(report)=>{
                setInterviewData(report)
                setStep(3)
                }}/>
        ) }


        {Step==3 && (
            <Step3Report report={interviewData}/>
        ) }
        
    </div>
  )
}

export default InterviewPage