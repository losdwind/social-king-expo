import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default function TwitterEmbed({ tweetUrl }: { tweetUrl: string }) {
    const [embedHtml, setEmbedHtml] = useState(null);

    useEffect(() => {
        const setupEmbed = async () => {
            try {
                const tweetApiUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(tweetUrl)}`;
                const response = await fetch(tweetApiUrl, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                });

                const json = await response.json();
                setEmbedHtml(json.html);
            } catch (error) {
                console.error('Failed to fetch tweet embed HTML:', error);
            }
        };

        setupEmbed();
    }, [tweetUrl]);

    const renderEmbed = () => {
        if (embedHtml) {
            const html = `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body>
            ${embedHtml}
          </body>
        </html>`;
            return (
                <View> <WebView source={{ html }} />
                </View >
            );
        }
        return null;
    };

    return <View>{renderEmbed()}</View>;
};
