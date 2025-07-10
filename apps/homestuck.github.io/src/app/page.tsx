export default function Home() {
  return (
    <main className='min-w-4xl bg-secondary text-main-foreground max-w-4xl w-fit flex flex-col items-center py-4 font-sans'>
      <article className='bg-main flex flex-col gap-4 justify-center min-w-lg max-w-lg w-fit *:not-first:px-6 *:last:pb-8'>
        <header className='bg-mspa-100 border-b-4 border-secondary p-4'>
          <h1 className='uppercase font-mono text-4xl font-bold text-center'>
            The Unofficial Homestuck Collection
          </h1>
        </header>
        <section id='#about'>
          <p>
            <strong>About the Unofficial Homestuck Collection</strong>
          </p>
          <p>
            Originally developed by <em>Bambosh</em> and <em>Giovan_h</em>, The{' '}
            <em>Unofficial Homestuck Collection</em> is a fan-created browser
            for reading <em>Homestuck</em> and other works by{' '}
            <em>Andrew Hussie</em> as they were originally intended to be
            experienced with native Flash support. The browser does not fetch
            content from the internet and instead utilizes an Asset Pack that
            must be downloaded by the user alongside the software for it to
            serve content. The UHC includes a <em>"New Reader Mode"</em> to
            present <em>Homestuck</em> as it was originally released, an inline
            media player for streaming music from the{' '}
            <em>Homestuck Bandcamp</em>, and many more features to enhance the
            user's reading experience.
          </p>
          <br />
          <p>
            A new "Official" Homestuck Collection is now in development, and the
            original <em>Unofficial Homestuck Collection</em> will continue to
            be preserved and available here. It should be noted that while it
            remains open source, any official updates or changes will be made on
            a new Homestuck Independant Creative Union controlled GitHub fork
            that can be found{' '}
            <a
              href='https://github.com/homestuck-independent-creative-union/unofficial-homestuck-collection'
              target='_blank'
              className='text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple] underline decoration-1'>
              here
            </a>
            .
          </p>
        </section>
        <section id='#download'>
          <p>
            <strong>Download</strong>
          </p>
          <p>
            To use the <em>Unofficial Homestuck Collection</em> you must
            download the <em>UHC App (80mb)</em> and{' '}
            <em>Asset Pack V2 (4.3gb)</em>. You can download these separately,
            or bundled together below. Updating the application does not require
            you to redownload the Asset Pack.
          </p>
          <br />
          <table className='w-full text-center'>
            <thead>
              <tr>
                <th>UHC Client</th>
                <th>Asset Pack</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href='https://github.com/homestuck/unofficial-homestuck-collection/releases'
                    target='_blank'
                    className='text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple] underline decoration-1'>
                    Github Release
                  </a>
                </td>
                <td>
                  <a
                    href='https://cdn.beyondcanon.com/uhc/assets.zip'
                    target='_blank'
                    className='text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple] underline decoration-1'>
                    AssetPackV2.zip
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='text-xs italic'>
          <p>The Unofficial Homestuck Collection</p>
          <p>
            Software copyright (C) 2020-2021 Bambosh, (C) 2021-2023 Bambosh and
            GiovanH, (C) 2024- GiovanH
          </p>
          <p>
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
          </p>
          <br />
          <p>
            This program is distributed in the hope that it will be useful, but
            WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
            General Public License for more details.
          </p>
          <br />
          <p>
            You should have received a copy of the GNU General Public License
            along with this program. If not, see{' '}
            <a
              href='https://www.gnu.org/licenses/'
              target='_blank'
              className='text-[blue] decoration-[blue] visited:text-[purple] visited:decoration-[purple] underline decoration-1'>
              https://www.gnu.org/licenses
            </a>
            .
          </p>
          <br />
          <p>
            Portions of this program may contain material subject to copyright
            and not subject to the GNU General Public License, including the
            copyrights associated with the properties owned and distributed by
            Homestuck, Inc. and Andrew Hussie.
          </p>
          <br />
          <p>
            In (non legally-binding) summary, you may freely use and distribute
            the software, as well as modify it and distribute your changes and
            modified versions, so long as you do not restrict the rights of
            others to do the same. You must clearly notate any changes and
            provide links to the unmodified original, and not remove credits
            (which are part of the original copyright). The Homestuck webcomic
            and associated copyrights are not subject to the rights granted
            under this license, and may be subject to takedown, enforcement, or
            modification by Homestuck, Inc. The Homestuck webcomic is not
            hereunder licensed, and any use thereof must be subject to separate
            written agreement with Homestuck, Inc.
          </p>
          <br />
          <p>
            As per section 7, the author attributions in Credits.vue must be
            preserved in all covered works. Modified versions may optionally
            extend this list as applicable, but modifications that remove
            attributions or otherwise misrepresent the origin of the material
            are not permitted.
          </p>
        </section>
      </article>
    </main>
  )
}
