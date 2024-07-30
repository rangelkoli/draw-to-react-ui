# DrawReact

Welcome to **DrawReact**, a powerful web application designed to convert your drawings and designs into Tailwind CSS code effortlessly. With a seamless frontend built on React and a robust backend powered by Django, DrawReact aims to revolutionize your web development process.

## Features

- **React Frontend**: Enjoy a smooth and responsive user experience as you interact with the application.
- **Django Backend**: Secure authentication and advanced AI code logic to handle your design conversions.
- **Supabase Database**: Efficiently stores user information and AI generation data.

## Demo
<a href="http://www.youtube.com/watch?feature=player_embedded&v=2HO18Nf6pTU" target="_blank"><img src="http://img.youtube.com/vi/2HO18Nf6pTU/0.jpg" 
alt="DrawReact Demo" width="500" height="400" border="10" /></a>

## Getting Started

To start using DrawReact, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rangelkoli/draw-ti-react-ui.git
   cd drawreact
   ```
2. **Backend**:
   ```
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
3. **Frontend**:
   ```
   cd frontend
   npm install
   npm run dev
   ```
4. **Database**:
   - Create a supabase account and then update the details in the settings.py file
5. **AI**:
  -  The project uses GeminiAI, so get an API key from gemini and then create a .env file in the backend folder
   ```
   GEMINI_API_KEY="YOUR_GEMINI_KEY"
   ```
