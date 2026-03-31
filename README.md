# WhatsappIntegrationUsingSpringAngular
For sending Whatsapp message through application 
Integrate Whatsapp into Springboot and Angular Application via Twilio Sandbox 

1. Angular Frontend: Provides a user interface where users input message details. It uses HttpClient to send these details as a POST request to the backend.
2. Spring Boot Backend: Acts as the secure middleware. It receives the request, authenticates with Twilio using Account SID and Auth Token, and uses the Twilio Java SDK to trigger the message dispatch.
3. Twilio Sandbox: Serves as the testing environment. It routes the API call from your backend specifically to WhatsApp device
