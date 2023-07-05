const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
exports.summaryController = async (req, res) => {
  try {
    const text = await req.body;
    const data = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this \n ${text} `,
      max_tokens: 500,
      temperature: 0.5,
    });
    console.log("================data=========", data);
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    return res.status(404).json({
      message: err.message,
    });
  }
};
