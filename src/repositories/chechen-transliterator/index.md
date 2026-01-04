---
layout: layout.njk
title: Chechen Transliterator
description: Convert Chechen text between Cyrillic and Latin scripts with intelligent transliteration. Includes special handling for word-ending 'н' and automatic blacklist detection.
---

<h1 class="page-title">Chechen Transliterator</h1>

<div class="content-section">
  <p>Enter your text in the box below and click "Transliterate" to see the transliterated version. Special handling is applied to the letter 'н' at the end of words:</p>
  <ul>
    <li>If the word is in the <strong><a href="https://github.com/chechen-language/ce-translit-js/blob/main/translit.ts">blacklist</a></strong>, 'н' is transliterated as 'n'.</li>
    <li>If the word is in the <strong><a href="https://github.com/chechen-language/ce-translit-js/blob/main/translit.ts">unsure list</a></strong>, 'н' is transliterated as 'ŋ[REPLACE]' to indicate manual review is needed.</li>
    <li>Otherwise, 'н' at the end of a word is transliterated as 'ŋ'.</li>
  </ul>

  <textarea
    id="transliteration-input"
    placeholder="Enter text to transliterate"
    class="istang-textarea"
    rows="8"
  ></textarea>

  <button id="transliterate-button" class="btn btn-primary mt-md">Transliterate</button>

  <p class="mt-lg">Output: <span id="transliteration-output" class="font-bold text-burgundy"></span></p>
</div>

{% block extra_scripts %}
<script type="module" src="/assets/repositories/chechen-transliterator/main.js"></script>
{% endblock %}
