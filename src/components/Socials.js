import React from 'react'
import { TwitterTimelineEmbed,TwitterFollowButton } from 'react-twitter-embed';
export const Socials = () => {
    return (
        <div className="social-section" id="social">
            <div className="social-heading">

        <h1>SOCIALS</h1>
            </div>
            <div className="twitter">
            <TwitterFollowButton
    screenName={'nithinAlva'}
  />
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nithinAlva"
            options={{height: 400}}
/>
            </div>
            
        </div>
    )
}
