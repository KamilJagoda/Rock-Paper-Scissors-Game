<?php
@include "_header.php";
?>

<div class="game">
    <h1 class="title">Rock Paper Scissors</h1>
    <div class="result">
        <span class="who user">User</span>
        <div class="scores">
            <span id="userScore" class="score">0</span><span class="score">:</span>
            <span id="computerScore" class="score">0</span></div>
        <span class="who computer">Computer</span>
    </div>
    <h2 class="game__title">Choose your power</h2>
    <i id="rock" class="far fa-hand-rock rock player-choice" data-value="0"></i>
    <i id="paper" class="far fa-hand-paper paper player-choice" data-value="1"></i>
    <i id="scissors" class="far fa-hand-scissors scissors player-choice" data-value="2"></i>
    <div class="game__result">
        <p id="resultDiv" class="game__result--type">Result</p>
    </div>
</div>

<script src="scripts/min/app.min.js"></script>
