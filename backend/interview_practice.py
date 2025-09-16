import openai

class InterviewPractice:
    def __init__(self, api_key):
        self.api_key = api_key
        openai.api_key = self.api_key

    def simulate_interview(self, job_title, user_response):
        prompt = f"You are an interviewer for the position of {job_title}. Ask a question and evaluate the user's response: {user_response}"
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        return response.choices[0].text.strip()

# Example usage:
# practice = InterviewPractice(api_key="your_openai_api_key")
# result = practice.simulate_interview("Software Engineer", "I have 5 years of experience in Python.")
# print(result)