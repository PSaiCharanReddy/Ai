import requests

class CoverLetterGenerator:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.groq.ai/v1"

    def generate_cover_letter(self, job_description, user_details):
        url = f"{self.base_url}/generate-cover-letter"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        payload = {
            "job_description": job_description,
            "user_details": user_details
        }
        response = requests.post(url, json=payload, headers=headers)
        return response.json()

# Example usage:
# generator = CoverLetterGenerator(api_key="your_api_key_here")
# result = generator.generate_cover_letter("Software Engineer job description...", {"name": "John Doe", "experience": "5 years in software development"})
# print(result)