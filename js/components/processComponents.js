components.select = `
    <section class="page-container">
    <div id="leaf-drop"></div>

    <h3 class="form-header">
        <span>LUS Game</span>
    </h3>

    <div class="pr-select-container">
        <div class="select-container">
            <div class="seclect-content">
                <button id="create-btn">Create</button>
                <button id="join-btn">Join</button>
            </div>
        </div>
    </div>

    </section>
`


components.join =
`
<section class="page-container">
<div id="leaf-drop"></div>

<h3 class="form-header">
    <span>LUS Game</span>
</h3>

<div class="pr-select-container">
    <div class="select-container">
    <form id="form-input-code">
    <h3>Enter the pin code: </h3>
    <input type="text" name="inputCode" id="input-code">
    <div id="input-error" class="message-error"></div>
    <button type="submit">Submit</button>
    </form>
    </div>
</div>

</section>
`

components.wait = 
`
    <section class="page-container">
    <div id="leaf-drop"></div>

    <div class="form-header">
        <span id="room-code" class="room-code"></span>
    </div>

    <div class="pr-wait-container">
        <div class="wait-container">
            <div class="wait-content">
                <p> Waiting for other player ... </p>
                <ul id="list-player"></ul>
            </div>
            <div class="wait-footer">
                <button id="start-btn">Start</button>
            </div>
        </div>
    </div>

    </section>
`