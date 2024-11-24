import { Link } from "react-router-dom";

const Chat = () => {
    const chats = [
      {
        name: "Elmer Laverty",
        message: "Haha oh man 🔥",
        time: "12m",
        profilePic:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      },
      {
        name: "Revano Satria",
        message: "woohooo",
        time: "24m",
        active: true,
        profilePic:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      },
      {
        name: "Lavern Laboy",
        message: "Haha that's terrifying 😂",
        time: "1h",
        profilePic:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      },
      {
        name: "Titus Kitamura",
        message: "omg, this is amazing",
        time: "5h",
        profilePic:
          "https://images.unsplash.com/photo-1502720705749-3c8f601b67cf",
      },
      {
        name: "Geoffrey Mott",
        message: "aww 😍",
        time: "2d",
        profilePic:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      },
      {
        name: "Alfonzo Schuessler",
        message: "perfect!",
        time: "1m",
        profilePic:
          "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      },
    ];
  
    return (
      <div className="h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search messages"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            />
          </div>
          <div className="p-4 space-y-4">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${
                  chat.active ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={chat.profilePic}
                  alt={chat.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{chat.name}</h4>
                  <p className="text-sm text-gray-500">{chat.message}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-white border-b">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                alt="Revano Satria"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Revano Satria</h4>
                <span className="text-sm text-green-500">Online</span>
              </div>
            </div>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
              Call
            </button>
          </div>
  
          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {[
              { text: "Halo!", isUser: false },
              { text: "Kira-kira ruangan berapa kali berapa kak?\nMisal 3×3 atau 3×4", isUser: false },
              { text: "Kamar anak 3×3 kak", isUser: true },
              { text: "Baik kak\nSesuai dengan portofolio yaa", isUser: false },
              { text: "Okay kak", isUser: true },
              { text: "Aku suka yang di portofolio", isUser: true },
            ].map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 max-w-xs rounded-lg ${
                    message.isUser ? "bg-yellow-100 text-right" : "bg-gray-200"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <p key={i} className="text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Product Card */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
              <img
                src="./images/catalog14.jpg"
                alt="Product"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold">Revano Satria</h4>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
                <p className="font-bold text-yellow-600">Rp 250.000,00</p>
              </div>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
        <Link to="/payment" className="block w-full h-full text-white text-center">
          Proceed to Payment
        </Link>
      </button>
            </div>
          </div>
  
          {/* Input Message */}
          <div className="p-4 bg-white border-t flex items-center space-x-4">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Chat;
  