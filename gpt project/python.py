import openai

openai.api_key = 'sk-r40R0afQhYVsK6gQp-OdKKIUPbTZrrvVh8_QjwBwJNT3BlbkFJabbIqLYLQNs-PNIFvEPfj8eBWOp7rZFyBQmD5F10kA'

def ask_gpt4(question):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question,
        max_tokens=150
    )
    return response.choices[0].text.strip()

# Example usage
question = "What are the steps involved in filing a civil lawsuit?"
print(ask_gpt4(question))
