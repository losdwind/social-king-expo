import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';

export default function TwitterEmbed({ tweetUrl }: { tweetUrl: string }) {
    const [embedHtml, setEmbedHtml] = useState(null);

    useEffect(() => {
        const setupEmbed = async () => {
            try {
                // const tweetApiUrl = `http://localhost:3000/oembed?url=${encodeURIComponent(tweetUrl)}`;
                const tweetApiUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(tweetUrl)}`;
                console.log("tweetApiUrl", tweetApiUrl);
                const response = await fetch(tweetApiUrl, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                });
                console.log("response", response);
                const json = await response.json();
                console.log("json", json);
                setEmbedHtml(json.html);
            } catch (error) {
                console.error('Failed to fetch tweet embed HTML:', error);
            }
        };
        setupEmbed();
    }, [tweetUrl]);

    const renderEmbed = () => {
        if (embedHtml) {
            let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';

            const html = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body>
            ${JS + embedHtml}
          </body>
        </html>`;
            // let source = JS + embedHtml;
            return (
                <View>
                    <Text>start to render the webview</Text>
                    <WebView source={{ html: html }} javaScriptEnabled={true} injectedJavaScript='https://platform.twitter.com/widgets.js' />
                </View >
            );
        }
        return <Text>cannot render the twitter embed</Text>;
    };

    return <View>{renderEmbed()}</View>;
};
