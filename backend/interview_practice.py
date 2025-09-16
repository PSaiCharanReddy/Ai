import requests

class InterviewPractice:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.groq.ai"

    def simulate_interview(self, job_title, user_response):
        url = f"{self.base_url}/simulate-interview"
        headers = {"Authorization": f"Bearer {self.api_key}"}
        payload = {
            "job_title": job_title,
            "user_response": user_response
        }
        response = requests.post(url, json=payload, headers=headers)
        return response.json()

# Example usage:
# practice = InterviewPractice(api_key="your_groqai_api_key")
# result = practice.simulate_interview("Software Engineer", "I have 5 years of experience in Python.")
# print(result)