from fastapi import FastAPI, UploadFile, File, Form
from gemini_integration import GeminiAI
from experience_matching import match_experience_to_job
from cover_letter_generator import CoverLetterGenerator
from interview_practice import InterviewPractice
import os
from typing import List, Dict
import sys

app = FastAPI()

# Ensure the backend directory is in the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Store API key in environment variable for demo purposes
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")

@app.get('/')
def read_root():
    return {"message": "Job Application & Networking Bot Backend is running."}

@app.post("/analyze_resume/")
async def analyze_resume(resume: UploadFile = File(...), job_description: str = Form(...)):
    resume_text = (await resume.read()).decode("utf-8")
    gemini = GeminiAI(api_key=GROQ_API_KEY)
    job_analysis = gemini.analyze_job_posting(job_description)
    rewritten_resume = gemini.rewrite_resume(resume_text, job_analysis.get("keywords", []))
    return {
        "job_analysis": job_analysis,
        "rewritten_resume": rewritten_resume
    }

@app.post("/match_experience/")
async def match_experience(experiences: List[Dict], job_requirements: List[str]):
    matched_experiences = match_experience_to_job(experiences, job_requirements)
    return {"matched_experiences": matched_experiences}

@app.post("/generate_cover_letter/")
async def generate_cover_letter(job_description: str, user_details: dict):
    generator = CoverLetterGenerator(api_key=GROQ_API_KEY)
    cover_letter = generator.generate_cover_letter(job_description, user_details)
    return {"cover_letter": cover_letter}

@app.post("/simulate_interview/")
async def simulate_interview(job_title: str, user_response: str):
    practice = InterviewPractice(api_key=GROQ_API_KEY)
    feedback = practice.simulate_interview(job_title, user_response)
    return {"feedback": feedback}
