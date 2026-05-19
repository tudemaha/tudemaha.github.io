author: Tude Maha
summary: An hands-on session to build your own AI automation powered by Google Agent Development Kit (ADK) with LLM from the free-tier of Google AI Studio. This session covers the Google Cloud Platform (GCP) preparation, enabling necessary APIs, connect to MCP server, and build the AI automation.
id: adk-planner-automation
categories: codelab,markdown
environments: Web
status: Draft
feedback link: https://linkedin.com/in/tudemaha

# Multi-Agent with ADK for Task Planner Automation

## Getting Started

### Overview

ADK is an open-source framework from Google to build AI agents. Talking about AI automation, ADK is the first choice since it provides simpler way to learn and build it.

On this session, we will create an AI automation to plan college tasks completion based on their complexity. This session covers Google Cloud Platform (GCP) preparation, enabling necessary APIs, connect to MCP server, and build the AI automation. Multi-agent approach will be used to build the AI automation.

Don't worry about your computer specification, most of our step will be done in GCP using the Cloud Shell Editor.

Let’s make this session a safe place to learn. Don’t hesitate to ask questions. If you have completed several steps, please feel free to assist other participants who might need help. **Let’s go together!**

### Prerequisites

1. Internet connection
2. 2FA Activated on Google Account
3. Basic knowledge about GCP
4. Stay calm and enthusiastic!🔥

## Create GCP Project

1. Go to `https://console.cloud.google.com`
2. Sign in to the Google account you will use for this workshop.
3. If you use GCP for the first time, check on Term of Services, then click “Agree and continue”.
4. Click the project picker on the top left, then click on “New project”.
   <br>
   <img src="./img/gcp-project-selection.png" width="400" alt="Project Selection">
5. Type the project name (e.g. adk-automation) then click the “Create” button.
   <br>
   <img src="./img/adk-create-project.jpg" width="600" alt="Create a Project on GCP">
6. After the project is created, select your new created project from the project picker.

## Enable Required APIs

Choose one option to enable the APIs: either Cloud Console or Cloud Shell.

### Cloud Console

1. Navigate to APIs & Services > Library from the left sidebar.
2. Searce for "Google Calendar API" then click the result to open the API page.
3. Click "Enable" to enable the API.
   <br>
   <img src="./img/adk-google-calendar.jpg" width="400" alt="Google Calendar API">

### Cloud Shell

1. Open the Cloud Shell by clicking the "Activate Cloud Shell" button on the top right of the GCP Console.
   <img src="./img/cloud-shell-icon.jpg" width="30" alt="Cloud Shell Icon">
2. Authorize the access of Cloud Shell.
3. Click the project picker on the top left, then copy your project ID.
4. Execute this command to enable the Google Calendar API.
   ```bash
   gcloud services enable calendar-json.googleapis.com --project=PROJECT_ID
   ```

## Create OAuth Consent Screen and Client

### OAuth Consent Screen

1. Navigate to APIs & Services > OAuth consent screen from the left sidebar.
2. Select "Get Started" on the Overview tab.
3. On App Information
   - App name: ADK Automation
   - User support email: `choose your email`
   - Click Next
4. On Audience, select `External`, then click Next.
5. On Contact Information, enter your email address, then Next.
6. Read and accept Google's User Data Policy, then Create.
7. Navigate to Audience tab.
8. Click "Publish app" to publish your consent screen.

### OAuth Client ID

1. Navigate to Clients tab.
2. Click on "+ Create Client" button.
3. On Application type, select **Desktop app**.
4. On the Name field, enter "ADK Automation".
5. Click "Create".
6. Download the JSON file containing your Client ID and Client Secret.
7. Change the file name to `client_secret.json`.

## Generate Gemini API Key

1. Open [Google AI Studio](https://aistudio.google.com/) in a new tab.
2. Go to "Get API Key".
3. On the top right, click "Create API Key".
4. Fill the form:
   - Name: ADK Automation
   - Imported Project:
     1. select "Import Project"
     2. select the GCP project you created earlier
     3. click "Import"
     4. choose `adk-automation` from the list
5. Click "Create key".
6. Copy the API key and store it securely.

## Prepare Your Environment

### Step 1: Code Editor

1. Open the Cloud Shell by clicking the "Activate Cloud Shell" (<img src="./img/cloud-shell-icon.jpg" width="30" alt="Cloud Shell Icon">) if it closed.
2. On the top right corner of the Cloud Shell, click "Open in new window" (<img src="./img/gcp-open-new-window.jpg" width="25" alt="Open Editor">).
3. Show the text editor by clicking on the "Open Editor" (<img src="./img/gcp-open-editor.jpg" width="25" alt="Open Editor">) on the top right corner.
4. Create a new folder for our project by running the following command:
   ```bash
   mkdir adk-automation
   cd adk-automation
   ```
5. On the editor, click "Open Folder", then select the folder you created in the previous step.

### Step 2: Python Virtual Environment

1. Create and activate Python virtual environment.
   ```bash
   python -m venv env
   source env/bin/activate
   ```
2. Install required Python packages.
   ```bash
   pip install google-adk python-dotenv
   ```

### Step 3: MCP Server

1. Upload the `client_secret.json` file to the `adk-automation` folder by dragging and dropping the file to the editor.
2. Authenticate the Google Calendar MCP Server.
   ```bash
   export GOOGLE_OAUTH_CREDENTIALS="client_secret.json"
   npx @cocal/google-calendar-mcp auth
   # If prompted, type "yes" to continue
   ```
3. Open the authentication URL in your browser, sign in to your Google account, and grant the necessary permissions.
4. Open a new Cloud Shell session, copy the URL redirection after finishing step 10. It should be like `http://localhost:3500/oauth2callback?state=6787cc77143176e0a1760...`
   ```bash
   curl -X GET "<paste the copied URL>"
   ```

<aside class="positive">
If you need to show the hidden file on the editor, navigate to View > Toggle Hidden Files
</aside>
