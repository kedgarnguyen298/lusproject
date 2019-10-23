components.chat = `
    <div class="chat-container">
        <div class="aside-left">
            <div class="name-twosides">
                <span class="name-twosides-title">Players</span>
            </div>
            <div class="line-show">
                <svg height="2" width="100%">
                    <line x1="0" y1="0" x2="500" y2="0" style="stroke:#dedede;stroke-width:2" />
                </svg>
            </div>
            <div class="list-players-show">
                <div class="list-players">
                    <div class="list-player-left" id="list-player-playing-pr">
                        
                    </div>

                </div>
            </div>
        </div>
        <div class="aside-center">
            <div class="above-answer-form">
                <div class="name-center">
                    <span class="name-center-title">Nối từ theo lượt</span>
                </div>
                <div class="line-show-center">
                    <svg height="2" width="100%">
                        <line x1="0" y1="0" x2="800" y2="0" style="stroke:#dedede;stroke-width:2" />
                    </svg>
                </div>
                <div class="answer">
                    <div class="answer-display" id="current-word">
                        
                    </div>
                    <div class="answer-time">
                        <div class="answer-time-number" id="time-number">
                            
                        </div>
                        <div class="answer-time-title">
                            Timeleft
                        </div>
                    </div>
                </div>
            </div>
            <form class="form-chat" id="form-chat">
                <div class="input-wrapper">
                    <input type="text" name="message" placeholder="Type your answer..." id="input-content">
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
        <div class="aside-right">
            <div class="name-twosides">
                <span class="name-twosides-title">Used Word</span>
            </div>
            <div class="line-show">
                <svg height="2" width="100%">
                    <line x1="0" y1="0" x2="500" y2="0" style="stroke:#dedede;stroke-width:2" />
                </svg>
            </div>
            <div class="list-words" id="list-used-words">

        </div>
    </div>
`