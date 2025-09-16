from typing import List, Dict

def match_experience_to_job(experiences: List[Dict], job_requirements: List[str]) -> List[Dict]:
    """
    Matches user-provided experiences to job requirements.

    Args:
        experiences (List[Dict]): A list of user experiences, each containing 'title', 'description', and 'skills'.
        job_requirements (List[str]): A list of job requirement keywords.

    Returns:
        List[Dict]: A list of experiences that match the job requirements.
    """
    matched_experiences = []

    for experience in experiences:
        matched_skills = [skill for skill in experience['skills'] if skill in job_requirements]
        if matched_skills:
            matched_experiences.append({
                "title": experience["title"],
                "description": experience["description"],
                "matched_skills": matched_skills
            })

    return matched_experiences

# Example usage:
# experiences = [
#     {"title": "Software Engineer", "description": "Developed web applications.", "skills": ["Python", "Django", "JavaScript"]},
#     {"title": "Data Analyst", "description": "Analyzed datasets.", "skills": ["SQL", "Excel", "Python"]}
# ]
# job_requirements = ["Python", "Django", "REST APIs"]
# print(match_experience_to_job(experiences, job_requirements))