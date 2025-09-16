import requests

class GeminiAI:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.gemini-ai.com"

    def analyze_job_posting(self, job_description):
        url = f"{self.base_url}/analyze-job"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        payload = {"job_description": job_description}
        response = requests.post(url, json=payload, headers=headers)
        return response.json()

    def rewrite_resume(self, resume, job_keywords):
        url = f"{self.base_url}/rewrite-resume"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        payload = {"resume": resume, "job_keywords": job_keywords}
        response = requests.post(url, json=payload, headers=headers)
        return response.json()

# Example usage
# gemini = GeminiAI(api_key="your_api_key_here")
# result = gemini.analyze_job_posting("Job description here")
# print(result)