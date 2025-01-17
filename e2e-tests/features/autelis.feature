@autelis
Feature: RoboDomo Autelis page
    As a User
    I want to press all the switches on Pool/Spa page
    So that I can see the app responses to changes properly

    Background:
        Given User navigates to Autelis page
        Then User is redirected to Autelis page
        Then Autelis tab shall be selected
        When User clicks on Autelis tab


    @S1 @automated
    Scenario Outline: Check Autelis pool/spa/solar options
        When User clicks on <button> button on Autelis page
        Then <parametersDisplay> on Autelis page
        Examples:
            | button | parametersDisplay                      |
            | OFF    | SPA-POOL parameters turned off         |
            | POOL   | Pool parameters are displayed          |
            | SPA    | Spa and Solar parameters are displayed |

    @S1 @automated
    Scenario Outline: Check Solar, Cleaner, Pool Heat, Pool light, Waterfall options 'On' and 'Off'
        When User clicks on <button> button to change state to On on Autelis page
        Then Autelis <button> button is enabled
        When User clicks on <button> button to change state to Off on Autelis page
        Then Autelis <button> button is disabled
        Examples:
            | button     |
            | Solar      |
            | Cleaner    |
            | Pool Heat  |
            | Pool Light |
            | Waterfall  |
            | Spa Heat   |
            | Jets       |
            | Spa Light  |
            | Blower     |

    @S1 @automated
    Scenario Outline: Check Pool/Spa heat adjustments to lower and higher values
        When User decreases <sensor> heat on Autelis page
        Then <sensor> heat is decreased on Autelis page
        When User increases <sensor> heat on Autelis page
        Then <sensor> heat is increased on Autelis page
        Examples:
            | sensor |
            | Pool   |
            | Spa    |
