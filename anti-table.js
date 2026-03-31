document.addEventListener('DOMContentLoaded', () => {
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');

    // define column order and display names
    const columns = [
        { key: 'id', label: '#' },
        { key: 'original', label: 'Original' },
        { key: 'anti_name', label: 'Anti-Name' },
        { key: 'profession', label: 'Profession / Role' },
        { key: 'race_country', label: 'Race / Country Inspiration' },
        { key: 'color_palette', label: 'Color Palette' },
        { key: 'abilities', label: 'Key Abilities / Powers' },
        { key: 'attire', label: 'Attire Summary' },
        { key: 'hairstyle_features', label: 'Hairstyle & Features' },
        { key: 'weapon', label: 'Weapon' },
        { key: 'relationship', label: 'Relationship / Storyline' },
        { key: 'mount_pet', label: 'Mount / Pet' }
    ];

    // load data from external JSON
    fetch('antitable-data.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            // build header
            columns.forEach(col => {
                const th = document.createElement('th');
                th.textContent = col.label;
                tableHeader.appendChild(th);
            });

            // build rows
            data.forEach(entry => {
                const tr = document.createElement('tr');
                columns.forEach(col => {
                    const td = document.createElement('td');
                    let value = entry[col.key];
                    if (value === undefined || value === null) value = '-';
                    td.textContent = value;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Failed to load anti-character data:', error);
            tableBody.innerHTML = `<tr><td colspan="12" style="text-align:center; padding:2rem;">❌ Error loading data. Please ensure <code>data.json</code> is present and valid.</td></tr>`;
            // also add fallback headers
            columns.forEach(col => {
                const th = document.createElement('th');
                th.textContent = col.label;
                tableHeader.appendChild(th);
            });
        });
});