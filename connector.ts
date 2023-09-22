import { DefineConnector } from "deno-slack-sdk/functions/definitions/mod.ts";
import { Schema } from "deno-slack-sdk/mod.ts";

export default DefineConnector({
  callback_id: "A014JS9DWH0#/functions/get_random_gif",
  title: "Random GIF",
  description: "Get a random Giphy GIF",
  input_parameters: {
    properties: {
      tag: {
        type: Schema.types.string,
        description: "Enter tags...",
        title: "Tag",
      },
      rating: {
        type: Schema.types.string,
        description: "Filter results by a specified rating",
        title: "Rating",
        enum: ["g", "pg", "pg-13"],
      },
    },
    required: ["rating"],
  },
  output_parameters: {
    properties: {
      gif_title_url: {
        type: Schema.types.string,
        description: "The title and URL for the GIF",
        title: "Giphy GIF",
      },
      tag: {
        type: Schema.types.string,
        description: "The tag used to return the GIF",
        title: "Tag",
      },
    },
    required: ["gif_title_url"],
  },
});
