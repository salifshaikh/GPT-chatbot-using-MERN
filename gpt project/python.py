import openai

openai.api_key = 'your API key' # replace 'your-api-key' with your actual OpenAI API key

def ask_gpt4(question):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question,
        max_tokens=150
    )
    return response.choices[0].text.strip()