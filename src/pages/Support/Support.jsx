import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import toast from "react-hot-toast";

const Support = () => {
  const { user } = use(AuthContext);
  const faqs = [
    {
      question: "How do I create a new habit?",
      answer:
        "Click on 'Add Habit' in the navbar, fill out the habit details, and submit. Your habit will appear in 'My Habits'.",
    },
    {
      question: "Can I track multiple habits at the same time?",
      answer:
        "Yes! You can create multiple habits and mark them complete independently. Each habit has its own streak and progress.",
    },
    {
      question: "How is my habit streak calculated?",
      answer:
        "A streak is calculated based on consecutive days you mark a habit complete. Missing a day will reset the streak.",
    },
    {
      question: "How can I edit or delete a habit?",
      answer:
        "Go to 'My Habits', find the habit, and use the Update or Delete buttons. Changes are saved instantly in your dashboard.",
    },
  ];

  const handleSupport = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const supportMessage = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
      }
      const sendSupport = await fetch(`${import.meta.env.VITE_API_URL}/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(supportMessage)
      })

      const data = await sendSupport.json()

      if (data.insertedId) {
        toast.success("Thank You For Your Message!")
        e.target.reset();
      }

      if (data.message) {
        toast.error(data.message);
        e.target.reset();
      }

    } catch (error) {
      console.log(error)
      toast.error("Support message can't send!")
    }    
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Need Help? We're Here!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Check our FAQs below or send us a message. We'll get back to you as soon as possible.
        </p>

        {/* FAQ Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Support
          </h3>
          <form
            onSubmit={handleSupport}
            className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              defaultValue={user?.displayName}
              className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
              readOnly
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              defaultValue={user?.email}
              className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
              readOnly
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
