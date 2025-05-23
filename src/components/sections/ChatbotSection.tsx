
import { Card } from "@/components/ui/card";

const ChatbotSection = () => {
  return (
    <section id="chat" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chat With Me</h2>
            <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question? My personal chatbot is available 24/7 to provide information about my experience, skills, and projects.
            </p>
          </div>

          <Card className="shadow-lg p-6 bg-white">
            <div className="h-[500px] flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Chatbot</h3>
                <p className="text-gray-600 mb-4">
                  This is where your chatbot will be embedded. 
                  Simply integrate your existing chatbot code here.
                </p>
                <div className="text-gray-500 text-sm">
                  {/* Placeholder for chatbot code */}
                  <code className="bg-gray-100 p-2 rounded">
                    {'<YourChatbotComponent />'}
                  </code>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
