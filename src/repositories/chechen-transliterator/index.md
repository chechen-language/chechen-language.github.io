---
layout: layout.njk
title: Chechen Transliterator
---

<h1>Chechen Transliterator</h1>
<p>Enter your text in the box below and click "Transliterate" to see the transliterated version. Special handling is applied to the letter 'н' at the end of words:</p>
<ul>
  <li>If the word is in the <strong><a href="https://github.com/chechen-language/ce-translit-js/blob/main/translit.ts">blacklist</a></strong>, 'н' is transliterated as 'n'.</li>
  <li>If the word is in the <strong><a href="https://github.com/chechen-language/ce-translit-js/blob/main/translit.ts">unsure list</a></strong>, 'н' is transliterated as 'ŋ[REPLACE]' to indicate manual review is needed.</li>
  <li>Otherwise, 'н' at the end of a word is transliterated as 'ŋ'.</li>
</ul>
<textarea
  id="transliteration-input"
  placeholder="Enter text to transliterate"
  class="form-control my-3"
  rows="5"
></textarea>
<button id="transliterate-button" class="btn btn-primary">Transliterate</button>
<p class="mt-3">Output: <span id="transliteration-output" class="font-weight-bold"></span></p>

{% block extra_scripts %}
<script type="module" src="/assets/repositories/chechen-transliterator/main.js"></script>
{% endblock %}
