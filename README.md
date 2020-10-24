# Treehouse Video Player Project

In this project, you'll build an HTML5 video player using JavaScript and the HTML5 Video API. Using the supplied mockups, video files, and transcript, you'll build an interactive video player that synchronizes the video and the transcript. The transcript should be placed below the video, and should highlight as the video progresses. When a user clicks any part of the transcript it should take them to the appropriate place in the video.

## Requirements
* Build the basic layout based on the mockups.
* Implement a media player.
* Embed the two video formats using HTML.
* Add the transcript below the video (as shown in the mockup file).
* Mobile first.
* Style the page to roughly match the mockups for mobile and tablet-desktop as guides.

### Extra
* When the user clicks on any sentence in the transcript the video player jumps to the appropriate time in the video.
* Customize the media player skin.

## Notes from the build process
The design was based on my impression from the mockups and layout was set and adjusted accordingly. Text size was also adjusted for mobile but I couldn't be sure if there was difference in size. Plain sans-serif font was chosen as I couldn't select the text to compare. The orange colour was selected by sampling the highlighted text in the mockup.
As an aside, I had difficulty getting the recommended player to work when mixing guidance from old videos and the owner's own docs. This was using the 'non-legacy' cdns for js and css. When I downloaded directly, apart from moving the svg to the css folder, there were no further issues. This took over 50% of the time for the build.

## Testing
Once completed, the site was run over a local server, in Chrome (v86), Safari (v14.0) and Firefox Developer Edition (v83). All on desktop. I saw no issues moving from mobile to tablet/desktop in terms of layout. I let the captions run through on each and it worked as expected and spot checked the click function for selecting parts of the video without issue.
Placing each browser window side by side, I noted that there were mild size differences due to the size of the taskbar. Most notable though was that Firefox renders the orange colour for the video screen with more luminance than either Chrome or Safari. As my colour was 90% opacity, I wondered if elements beneath were effecting this but I couldn't see this to be the case.
