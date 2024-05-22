---
layout: layout.njk
title: Chechen Transliterator
---

<h1>Chechen Transliterator</h1>
<textarea id="transliteration-input" placeholder="Enter text to transliterate" class="form-control my-3"></textarea>
<button id="transliterate-button" class="btn btn-primary">Transliterate</button>
<p class="mt-3">Output: <span id="transliteration-output" class="font-weight-bold"></span></p>

{% block extra_scripts %}
<script src="/assets/repositories/chechen-transliterator/main.js"></script>
{% endblock %}
